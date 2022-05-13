import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
	body: '#f6f3e6',
	color: '#f6f3e6',
	imageCard: '#f6f3e6',
	border: '2px solid black',
	photoDescription: '#9FB0BF',
	borderTop: 'none',
	borderBottom: 'red',
	buttonColor: '#f6f3e6',
	fontColor: 'black',
	backgroundColor: '#f6f3e6',
	navText: 'black',
	cardText: 'black',
};

export const darkTheme = {
	body: 'black',
	color: ' #f6f3e6',
	imageCard: '#f6f3e6',
	border: '2px solid #f6f3e6',
	borderTop: '4px solid #f6f3e6',
	borderBottom: 'none',
	buttonColor: 'black',
	buttonFont: '#f6f3e6',
	fontColor: '#f6f3e6',
	textShadow: '8px 8px 6px #f6f3e6',
	backgroundColor: 'black',
	navBar: 'black',
	navText: '#f6f3e6',
	buttonBorder: '#f6f3e6',
	backgroundImage: 'none',
	horoscopesBackground: 'black',
	cardText: 'black',
};

export const GlobalStyles = createGlobalStyle`
        
        body{
            background-color: ${(props) => props.theme.body};
        }

        .nav{
            background-color:${(props) => props.theme.navBar};
            background-image:${(props) => props.theme.backgroundImage};
            border: 2px solid ${(props) => props.theme.fontColor};
            

        }

        .nav-item a{
            color:${(props) => props.theme.navText};
        }

        .burger{
            background:${(props) => props.theme.fontColor}
        }

        .image-card{
            background-color:${(props) => props.theme.body};
        }

        .photo-of-the-day,
        .divine-feminine{
            border: ${(props) => props.theme.border};
        }

        .header-title, 
        .page-title-info{
            color:${(props) => props.theme.fontColor};
        }

        .header-title{
            text-shadow: ${(props) => props.theme.textShadow};

        }

        .about-this-photo{
            border-top:${(props) => props.theme.borderTop};
        }

        .photo-explanation{
            border-bottom:${(props) => props.theme.borderBottom};
        }

        button.today, 
        button.tomorrow, 
        button.yesterday{
            background-color:${(props) => props.theme.buttonColor};
            color: ${(props) => props.theme.buttonFont};
        }
        
        .button{
            background-color:${(props) => props.theme.buttonColor};
            color: ${(props) => props.theme.buttonFont}
            border:${(props) => props.theme.buttonBorder}

        }
        .card-body{
            background-color:${(props) => props.theme.imageCard};
        }

        .card-title,
        h6,
        .card-text{
            color:${(props) => props.theme.cardText}!important;
        }

        .horoscopes-section{
            background-color:${(props) => props.theme.horoscopesBackground};
            background-image:${(props) => props.theme.backgroundImage};
        }

        .horoscopes-title,
        .this-week{
            color:${(props) => props.theme.fontColor}
        }

        .thankyou-for-visiting, 
        .about-text{
            color:${(props) => props.theme.fontColor}
        }


    `;
