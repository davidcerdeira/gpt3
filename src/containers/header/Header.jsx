import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div>
      <div className='gpt3__header section__padding' id='home'>
        <div className='gpt3__header-content'>
          <h1 className='gradient__text'>
            It&apos;s time. Let&apos;s Dive Into the Future with GPT-3 OpenAI
          </h1>
          <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          
          </p>

          <div className='gpt3__header-content__input'>
            <input type='email' placeholder='Your Email Address' />
            <button type='button'>Get Started</button>
          </div>

          <div className='gpt3__header-content__people'>
            <img src={people} alt='people' />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
        <div className='gpt3__header-image'>
          <img src={ai} alt='ai header' />
        </div>
      </div>
    </div>
  );
};

export default Header;
