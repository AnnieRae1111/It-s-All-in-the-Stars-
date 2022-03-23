import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    body:'#f6f3e6',
    color: 'black',
    imageCard:'#f6f3e6',
    border: '2px solid black',
    photoDescription: '#9FB0BF',
    borderTop:'none',
    borderBottom:'none'

}

export const darkTheme = {
    body: 'black',
    color:' #f6f3e6',
    imageCard:'black',
    border: '2px solid #f6f3e6',
    borderTop:'#f6f3e6',
    borderBottom:'#f6f3e6',
}

export const GlobalStyles = createGlobalStyle`
    
    body{
        background-color: ${props => props.theme.body}
    }

    .image-card{
        background-color:${props => props.theme.imageCard}
    }

    .photo-of-the-day{
        border: ${props=> props.theme.border}
    }

    .header-title, 
    .page-title-info{
        color:${props=>props.theme.color}
    }

    .photo-description-container{
        background-color:${props=> props.theme.photoDescription}
    }

    .about-this-photo{
        border-top:${props=>props.theme.borderTop}
    }

    .photo-explanation{
        border-bottom:${props=> props.theme.borderBottom}
    }


`