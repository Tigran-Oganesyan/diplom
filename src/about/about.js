import '../index.css';
import CommitCardList from '../js/components/CommitCardList';
import GitHubApi from '../js/modules/GitHubApi';


import Swiper from 'swiper';
// import Swiper styles
import '../../node_modules/swiper/js/swiper';


const gitHubApi = new GitHubApi({
    baseUrl: 
        'https://api.github.com/repos/Tigran-Oganesyan/diplom/commits'
    }
);

const commitCardList = new CommitCardList(document.querySelector('.swiper-wrapper'));

gitHubApi.getCommits()
    .then(res=> {
        commitCardList.addListCard(res);
        const mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal',
            loop:false,
        
            breakpoints: {
                320: {
                    spaceBetween:8,
                    initialSlide:0,
                    slidesPerView:1,
                    slidesPerGroup: 1,
                },
                768: {
                    initialSlide:10,
                    spaceBetween:8,
                    slidesPerView:1,
                    slidesPerGroup: 2,
                },
                769: {
                    initialSlide:10,
                    spaceBetween:8,
                    slidesPerView:2,
                    slidesPerGroup: 2,
                },
                1024: {
                    spaceBetween: 10,
                    initialSlide:10,
                    slidesPerView:1,
                    slidesPerGroup: 2,
                }
                
            },
        
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
            },
        
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        
        })
    })
    .catch(err => console.log(err))



