const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabItems = $$('.tab-item')
const tabPanes = $$('.tab-pane')

const tabActive = $('.tab-item.active')

console.log(tabActive)

const line = $('.tabs .line')


    line.style.left = tabActive.offsetLeft + 'px'
    line.style.width = tabActive.offsetWidth + 'px'


tabItems.forEach((tabItem, index) => {
    const tabPane = tabPanes[index]
    
    
    tabItem.onclick = function() {
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')

        line.style.left = tabItem.offsetLeft + 'px'
        line.style.width = tabItem.offsetWidth + 'px'


        this.classList.add('active')
        tabPane.classList.add('active')
    }
})

