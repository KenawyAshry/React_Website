import styled from 'styled-components'


export const SocialMediaSection = styled.div `
height: auto;
overflow: hidde
`
export const SocialPart = styled.div `
width: 33.33%;
float: left;
box-sizing: border-box;
padding: 100px 0 100px 60px;

&.face {
    background: #3b5998;
}
&.twitter {
    background: #498cbf;
}
&.pin {
    background: #cc2127;
}
`
export const Icon = styled.i `

width: 50px;
height: 50px;
background: #fff;
text-align: center;
line-height: 50px;
color: #888;
float: left;
margin-right: 10px;
margin-top: 5px

`
export const SocialDesc  = styled.p `
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff;
    float: left
`
export const Span  = styled.span `
display: block;
margin-bottom: 8px;

&.info2 {
    font-weight: normal
}

`
