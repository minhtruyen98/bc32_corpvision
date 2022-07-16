function handleEvent(){
    const $ = document.querySelector.bind(document);
    const Header = $('.header');
    const headerTheme = $('.header__theme');
    const navBtn = $('.navbar-toggler');
    const searchBtn = $('.header__search');
    const closeBtn = $('.search__form .close-icon');
    const searchForm = $('.search__form');
    const backToTop = $('.backToTop');
    let isMenuOpen = false;
    //xử lý header khi scroll
    document.onscroll = function(){
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(scrollTop >= 90){
            Header.style.paddingTop = 10 + 'px';
            Header.style.paddingBottom = 10 + 'px';
            Header.classList.add('active');
        }
        else {
            Header.style.paddingTop = 15 + 'px';
            Header.style.paddingBottom = 15 + 'px';
            Header.classList.remove('active');
        }
        //back to top
        if(scrollTop >= 500){
            backToTop.classList.add('active')
        }
        else{
            backToTop.classList.remove('active')
        }
    }
    // xử lý khi open menu của header
    navBtn.onclick = function(){
        if(!$('.header.active') && !$('.header.openMenu') && !isMenuOpen){
            Header.classList.add('openMenu');
        }
        else {
            Header.classList.remove('openMenu');
        }
        isMenuOpen = !isMenuOpen;
    }
    //xử lý change theme
    headerTheme.onclick = function(){
        headerTheme.classList.toggle('dark');
        if($('.header__theme.dark')){
            document.documentElement.setAttribute('data-theme','dark');
        }
        else {
            document.documentElement.setAttribute('data-theme','light');
        }
    }
    // xử lý khi click search 
    searchBtn.onclick = function(){
        searchBtn.classList.add('active');
        searchForm.style.display = 'flex';
        searchForm.querySelector('input').focus();

    }
    closeBtn.onclick = function(){
        searchBtn.classList.remove('active');
        searchForm.style.display = 'none';
    }
}