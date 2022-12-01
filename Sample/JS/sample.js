const imgElement = document.querySelector('img');
const buttonElement = document.querySelector('button');
const h1Element = document.querySelector('h1');

const onClicklistener = () => {
    const nowSrc = imgElement.getAttribute('src');
    if(nowSrc === 'image/ArthasKingOfUndead.jfif'){
        imgElement.setAttribute('src','image/LichKingArthas.jfif');
    } else {
        imgElement.setAttribute('src','image/ArthasKingOfUndead.jfif');
    }
};

const onClickButtonlistener = () =>{
    const userName = prompt('이름은 입력하시오.');
    h1Element.innerText = userName;
}

imgElement.onclick = onClicklistener;
buttonElement.onclick = onClickButtonlistener;