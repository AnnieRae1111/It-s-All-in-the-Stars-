import { createGlobalStyle, withTheme } from "styled-components"

export const lightTheme = {
    body:'#f6f3e6',
    color: '#f6f3e6',
    imageCard:'#f6f3e6',
    border: '2px solid black',
    photoDescription: '#9FB0BF',
    borderTop:'none',
    borderBottom:'red',
    buttonColor:'#f6f3e6',
    fontColor:'black',
    backgroundColor:'#f6f3e6',
    navText:'black',
    
}

export const darkTheme = {
    body: 'black',
    color:' #f6f3e6',
    imageCard:'black',
    border: '2px solid #f6f3e6',
    borderTop:'4px solid #f6f3e6',
    borderBottom:'4px solid #f6f3e6',
    buttonColor: 'black',
    buttonFont:'white',
    fontColor:'white',
    textShadow: '8px 8px 6px #white',
    backgroundColor:'black',
    navBar:'black',
    navText:'white',
    buttonBorder:'white',
    backgroundImage:'none'
}

export const GlobalStyles = createGlobalStyle`
    
    body{
        background-color: ${props => props.theme.body};
    }

    .nav{
        background-color:${props=> props.theme.navBar};
        background-image:${props=> props.theme.backgroundImage};
        

    }

    .nav-item a{
        color:${props=> props.theme.navText};
    }

    #change-theme-button{
        background-color:${props => props.theme.backgroundColor};
        color:${props => props.theme.fontColor};
        border: 2px solid ${props=>props.theme.buttonBorder};
        border-radius: 10px ;
        outline:none;
    }

    .image-card{
        background-color:${props => props.theme.imageCard};
    }

    .photo-of-the-day{
        border: ${props=> props.theme.border};
    }

    .header-title, 
    .page-title-info{
        color:${props=>props.theme.fontColor};
       
    }

    .header-title{
        text-shadow: ${props=>props.theme.textShadow};

    }

    // .photo-description-container{
    //     background-color:${props=> props.theme.photoDescription};
    // }

    .about-this-photo{
        border-top:${props=>props.theme.borderTop};
    }

    .photo-explanation{
        border-bottom:${props=> props.theme.borderBottom};
    }

    button.today, 
    button.tomorrow, 
    button.yesterday{
        background-color:${props => props.theme.buttonColor};
        color: ${props=> props.theme.buttonFont};
    }
    
    // .button{
    //     background-color:${props => props.theme.buttonColor}
    //     color: ${props=> props.theme.buttonFont}

    // }
    .card-body{
        background-color:${props => props.theme.body}
    }

    .card-title,
    h6,
    .card-text{
        color:${props => props.theme.fontColor}!important;
    }


`