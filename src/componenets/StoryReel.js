import React from 'react'
import Story from './Story'
import "./StoryReel.css"

function StoryReel() {
  return (
    <div className='storyReel'>
    <Story
        image="https://scontent.fccu3-1.fna.fbcdn.net/v/t1.6435-9/37382772_1083274371829675_1880160107493326848_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=19026a&_nc_ohc=SWXIhSbLZDsAX_p58Gc&_nc_ht=scontent.fccu3-1.fna&oh=00_AT_e6tu5nPJIu_CplkVnnmvqnlYhf3nS-gnfs7IEgqFD_w&oe=62333D01"
        profileSrc="https://media-exp1.licdn.com/dms/image/C5603AQFbRPRxhNbwRw/profile-displayphoto-shrink_200_200/0/1517029201305?e=1647475200&v=beta&t=2Rs0MV2terli7TpVkZubG9YaxGHf6HycWncbbaMcWOU"
        title= "Amlan Samantaray"
    />
    <Story
        image="https://assets.entrepreneur.com/content/3x2/2000/1623331196-812881-sundar-pichai-4542.jpg?crop=1:1"
        profileSrc="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg"
        title= "Sundar Pichai"
    />
    <Story
        image="https://c8.alamy.com/comp/PF3PC9/desktop-source-code-and-technology-background-developer-or-programer-with-coding-and-programming-wallpaper-by-computer-language-and-source-code-com-PF3PC9.jpg"
        profileSrc="https://pbs.twimg.com/profile_images/1324559686515916801/UiAg9a5U_400x400.jpg"
        title= "Subham Kumar Jena"
    />
    <Story
        image="https://upload.wikimedia.org/wikipedia/commons/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg"
        profileSrc="https://ubscom-images.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/12/shahrukh-khan-1-350x250.jpg"
        title= "Shahrukh Khan"
    />
    <Story
        image="https://qph.fs.quoracdn.net/main-qimg-166abf8fe433e07acdea9c2b36abfe06-lq"
        profileSrc="https://www.filepicker.io/api/file/9GCYH9YQnyqu4Ymwmzu9"
        title= "Rafe Qazi"
    />
    </div>
  )
}

export default StoryReel