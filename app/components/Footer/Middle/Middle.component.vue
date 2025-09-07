

<template>
  <div class='footer-middle flex flex-1 w-full justify-center items-center'>
    <div class='footer-middle-container flex w-full justify-center items-center'>
      <ul class='text-2xl flex md:flex-row max-md:flex-col text-white max-md:text-center md:list-disc'>
        <li class='md:mr-10'><a href='#Landing' class='block relative text-center hover:underline'>Home</a></li>
        <li class='md:mr-10'><a href='#About' class='block relative text-center hover:underline'>About</a></li>
        <li class='md:mr-10'><a href='#SkillsAndTechnologies' class='block relative text-center hover:underline'>Skills & Technologies</a></li>
        <li class=''><a href='#Goals' class='block relative text-center hover:underline'>Goals</a></li>
      </ul>
    </div>
  </div>
</template>

<style lang="sass" scoped>
 .footer-middle
  > .footer-middle-container
    ul
      > li
        > a
          text-decoration: none
          
          &::before
            content: ''
            position: absolute
            width: 0
            height: 1px
            left: 0
            bottom: 0
            background-color: #fff

          &::after
            content: ''
            position: absolute
            width: 0
            height: 1px
            right: 0
            bottom: 0
            background-color: #fff

          &::before, &::after
            transition: width 200ms ease

          &:hover
            &::before, &::after
              width: 100%
</style>