<script setup>
  import { jarallax } from 'jarallax'
  import 'jarallax/dist/jarallax.min.css'
  import { AccordionItemComponent, ContentSectionComponent } from '#components'

  onMounted( () => {
    jarallax( document.querySelectorAll( '.jarallax' ), {
      speed: 0.4,
    } )
  } )

  const skillsAccordionItems = [
    {
      title: 'HTML',
      dark: false,
      content: `I'm extremely proficient and compitent with HTML, and I can build basic websites from scratch. I've worked on a lot of projects
              with HTML and CSS, and I'm confident that I can help you with your next project. I also know Pug (former Jade).`,
    },
    {
      title: 'CSS',
      dark: true,
      content: `Styling comes easy to me. I stay updated with the latest trends and features.
              I also know a few frameworks, such as Tailwind and Boostrap. But I also know
              CSS preprocessors, such as SASS/SCSS, Stylus, and Less.`,
    },
    {
      title: 'JavaScript',
      dark: false,
      content: `JavaScript is one of my favorite languages to work with. I just love the simpleness of the language. I know following technologies for JavaScript:
              <ul class='list-disc list-inside'>
                <li>Vanilla / ES6</li>
                <li>
                  Node.js
                  <ul class='list-[circle]'>
                    <li>Express.js</li>
                    <li>Socket.io</li>
                  </ul>
                </li>
                <li>React
                  <ul class='list-[circle]'>
                    <li>Next.js</li>
                    <li>React Native</li>
                  </ul>
                </li>
                <li>Vue
                  <ul class='list-[circle]'>
                    <li>Nuxt.js</li>
                  </ul>
                </li>
                <li>jQuery</li>
              </ul>`,
    },
    {
      title: 'PHP',
      dark: true,
      content: `PHP is one of my first programming languages that I learned, back in the early 2010s. Although I don't use it a lot anymore,
              I still feel comfortable with it. While I don't know much about frameworks for PHP, I can learn them fast if needed.`,
    },
    {
      title: 'C#',
      dark: false,
      content: `C# is my most recent programming language that I've learned. Thanks to my background in programming, I was able to achieve
              an A in a C# course, called "Programming 1." Right now, I'm studying system development with focus on .NET. In short time
              I will be able to work with C# and .NET.`,
    },
    {
      title: 'Python',
      dark: true,
      content: `Python is something I learned on a whim, when I wanted to create a social media webapp for my family, and relatives. So
              I made a REST API in Python (for the backend), using the Flask framework.`,
    },
    {
      title: `Databases`,
      dark: false,
      content: `While MongoDB is my favorite database, I have experience with MySQL, PostgreSQL, and SQLite.`,
    },
    {
      title: 'CMS',
      dark: true,
      content: `I have experience with CMS, such as WordPress, and Directus.`,
    },
    {
      title: 'Other',
      dark: false,
      content: `A few worth-to-mention skills are: Git, Docker, Jenkins, Linux, Windows, Nginx, and more.`,
    }
  ]
</script>

<template>
  <div id='Home' class='home flex flex-col w-full h-full'>
    <div class='home-container flex flex-col grow'>

      <section id='Landing' class='section landing relative flex flex-col w-full min-h-screen max-h-screen bg-[url("~/assets/images/Background-12.jpg")] bg-fixed bg-cover bg-center grayscale'>
        <div class='landing-container flex flex-col justify-center items-center w-full min-h-screen h-full'>
          <div id='LandingLogo' class='landing-logo w-full h-full'>
            <div class='landing-logo-container flex flex-col h-full justify-center items-center'>
              <!-- <LogoComponent width='60rem' :isMobile='true' /> -->
               <h1 class='relative fc flex flex-row md:scale-[0.9] xl:scale-[1.2] text-[15rem] text-stone-50 cursor-default z-20'>
                <span>F</span>
                <span>C</span>
              </h1>
            </div>
          </div>
          <div class='landing-go-to-next-section absolute w-fit left-0 right-0 bottom-0 mx-auto z-10'>
            <a href='/#About' class='block py-4 text-white text-7xl hover:-translate-y-2 transition-all'>
              ⇓
            </a>
          </div>
        </div>
      </section>

      <ContentSectionComponent id='About' title='About' class='min-h-screen'>
        <img
          src='~/assets/images/ProfileImage.png'
          class='float-right w-[20rem] border-2 border-stone-900 mr-4 rounded-full shadow-lg grayscale'
          alt='Profile Image' />
        <p>
        Hello dear reader,
        <br />
        I am primarily a problem solver, passionate about tackling challenges—whether it's programming, web development, troubleshooting computer issues, or creating music. The more complex the problem, the more I enjoy working on it.
        <br /><br />
When it comes to programming, I often say that I inherited this interest from my father, who has worked as a programmer and database administrator throughout his life.
        <br />I love building websites, including both frontend and backend development, setting up databases and servers, and more. I find myself very creative, but I also enjoy logical thinking. To me, programming is like solving a complex puzzle—either the piece fits or it doesn’t, but there's always a way to program in your own unique style. I thrive on solving complex problems, which makes creating web applications and developing interactive content especially rewarding.
        <br /><br />
Beyond programming and web development, I have other hobbies as well. For example, I work out regularly at the gym (4–6 days a week), focusing on strength and cardio training. I also have creative pursuits, such as producing electronic dance music on my computer, a passion I've had since 2007. 
        <br /><br />
In short, I’m someone who doesn’t give up easily. I’m very organized and detail-oriented, making sure I complete tasks on time. Thanks to this, I learn new skills quickly and efficiently. I can be quite persistent, often trying “my way” first, and I tend to be reluctant to ask for help. However, I usually manage to solve most problems on my own and am always willing to assist others when needed.
        <br /><br />
I would describe myself as open, honest, and positive, though I am also quite introverted. I know what I like and dislike, and I don’t shy away from expressing it. Receiving constructive criticism comes easily to me because I’m always eager to learn more and improve. I truly appreciate the help I get along the way.
        </p>
      </ContentSectionComponent>

      <ContentSectionComponent id='SkillsAndTechnologies' title='Skills & Technologies' :isGray='true' class='min-h-screen'>
        <p>
          I have experience in a wide range of programming languages and frameworks, including:
        </p>
        <div class='flex flex-col flex-wrap mt-4'>
          <AccordionComponent :items='skillsAccordionItems' />
        </div>
      </ContentSectionComponent>

      <ContentSectionComponent
        id='Goals'
        title='Goals, Future & Interests'
        class='jarallax min-h-screen'>
        <img src='~/assets/images/Goals_5.jpg'
          class='float-right max-md:hidden w-[20rem] border-2 border-stone-900 rounded-full shadow-lg mr-4 mb-2 grayscale'
          alt='Goals Image' />
        <p>
          My <b class='text-red-600'>long-term goals</b> include finding my forever-<font-awesome icon='heart' class='!text-red-600' />-company, where I can work on projects that I find interesting,
          that I can contribute to, and get to work with like-minded people. I would also like to work as a <b class='italic text-red-600'>full-stack developer</b>,
          since I love both frontend and backend development. But who knows, maybe I'll end up doing something else, like software and
          system development. <br /><br />
          My <b class='text-red-600'>short-term goals</b> include learning more about C# and .NET, and finishing my 2-year vocational school education.
          I would also like to learn more JavaScript frameworks, such as Svelte, Ember, and Angular (together with TypeScript). Then I'd
          know the big ones, and be even more efficient and knowledgable. <br /><br />
          Besides from programming and webdevelopment, I have other <b class='text-red-600'>hobbies and interests</b> as well. I exercise regularly by going
          for long walks, where I most often listen to stories about the strange, dark, and mysterious, or listen to music--I
          love electronic dance music, which I also produce it myself, on my computer with a software
          called FL Studio, since 2007. In other words, I'm very creative, and always want to learn new things. <br />
        </p>
      </ContentSectionComponent>

      <ContentSectionComponent
        id='Contact'
        class='min-h-[15rem] !text-white !bg-[#000]'
        bodyClass='flex flex-row line-height-[1]'>
        <div
          class='left flex-1'
          style='font-family: "Bebas Neue", sans-serif;'>
          <h2 class='block md:text-6xl max-md:text-4xl line-height-[1]'>
            <a href='mailto:felix@felixcervin.se'>
              felix@felixcervin.se
            </a>
          </h2>
        </div>
      </ContentSectionComponent>

    </div>
  </div>
</template>

<style lang="sass">
  #Landing
    &::before
      content: ''
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      background: rgba(0, 0, 0, 0.7)
      z-index: 5

    &::after
      content: ''
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      background: radial-gradient(circle,rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 50%)

    .fc
      transition: transform 400ms ease

      span
        transition: width 400ms ease, margin 400ms ease, transform 400ms ease

        &:first-child
          display: block
          width: 5.25rem
          overflow: hidden

          &::after
            content: 'elix'

        &:last-child
          display: block
          width: 5.5rem
          overflow: hidden

          @keyframes blink
            0%
              opacity: 1
            50%
              opacity: 0
            100%
              opacity: 1

          &::before
            content: ''
            position: absolute
            width: 2rem
            height: 2rem
            right: -3rem
            bottom: 6.5rem
            border-radius: 100%
            background-color: #fff
            animation: blink 1s infinite
            transition: right 400ms ease

          &::after
            content: 'ervin'

      &:hover span
        width: calc-size( fit-content, size )
        margin-inline: 1rem

        &::before
          right: -1.5rem

      @media screen and ( max-width: 992px )
        transform: scale(0.7) rotate(90deg)

        span
          width: calc-size( fit-content, size ) !important

  #Goals
    position: relative
    background-image: url('~/assets/images/Goals_Background-2.jpg')
    background-size: cover

    &::after
      content: ''
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      background: rgba(245, 245, 244, 0.8)
      z-index: 0

  ul
    li
      ul
        padding-left: 4rem
</style>
