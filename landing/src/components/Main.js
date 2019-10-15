import PropTypes from 'prop-types'
import React from 'react'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="what-does-haiku-mean"
          className={`${
            this.props.article === 'what-does-haiku-mean' ? 'active' : ''
          } ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className="major">What does Haiku mean?</h2>
          <p>
            All the Haikus alongside witht he contents of this site are based on{' '}
            <a href="http://haikuguy.com/issa/aboutme.html" target="_blank">
              David G. Lanoue awesome work
            </a>
            .
          </p>
          <p>
            <b>Haiku:</b> a one-breath poem that discovers connection.
          </p>
          <p>
            The foremost poets of Japanese haiku tradition are Bashô, Buson,
            Issa, Shiki. The first three were artists of <i>haikai</i>: masters
            of the linked verse game known as <i>haikai no renku</i>:{' '}
            <i>renku</i> for short. The fourth, Shiki, coined the term "haiku,"
            and envisioned it as an independent poetic genre. While
            technically—that is to say, in Japanese terms—Bashô, Buson, and Issa
            were poets of <i>haikai</i>; the term "haiku" is used by many
            English speakers to describe what they wrote. In other words,
            "haiku" in English covers a broader field than it does in Japanese,
            for it embraces both
            <i>haikai</i> and <i>haiku</i>. Throughout this website, I use the
            term "haiku" when referring to Issa.
          </p>
          <p>
            <b>What makes it a poem?</b> Haiku in English usually appears as an
            unrhymed three-line verse. Its use of intense, fragmentary imagery
            and its stress on rhythm and sound place it in the poetry side of
            the language spectrum.
          </p>

          <p>
            <b>Can it be defined?</b> Cyril Childs writes, "With haiku, how can
            we define (i.e. objectively set precise boundaries to) a poetic form
            that has developed and evolved over many centuries and continues to
            evolve across national boundaries and language barriers? How can we
            define inclusively each and every example of such a tradition and
            exclude others? I suggest the only answer to both questions is 'We
            can't.'" (<cite>Presence</cite> 21 2003: 23). Nevertheless, in 2004
            the Haiku Society of America put forth this working definition: "A
            haiku is a short poem that uses imagistic language to convey the
            essence of an experience of nature or the season intuitively linked
            to the human condition."
          </p>
          <p>
            <b>How many parts does it have?</b> Though it can be presented on
            the page in three lines, a traditional Japanese haiku of Issa's era
            structurally consists of two parts with a pause in between. Its
            power as poetry often derives from juxtaposition of the two images
            and the sense of surprise or revelation that the second image
            produces. A good haiku is like a good joke: the set-up (image 1),
            then the punch line (image 2). An example from Issa:
          </p>
          <blockquote>
            spring rain--
            <br />
            the uneaten ducks
            <br />
            are quacking
          </blockquote>
          <p>
            Two images appear: (1) spring rain falling, (2) the ducks that have
            survived the cooking pots of winter quacking. Considered alone, each
            image doesn't amount to much of a poem. But set side-by-side, the
            rain and the ducks make a powerful, celebratory statement about
            life, survival, and the promise of spring.
          </p>
          <p>
            <b>Does a haiku need 17 syllables?</b> In Japan traditional haiku
            consists of seventeen "syllables" (<i>onji</i>) arranged in a 5-7-5
            pattern. For example, here's the spring rain/quacking ducks poem in
            Japanese:
          </p>

          <blockquote>harusame ya / kuware-nokori no / kamo ga naku</blockquote>

          <p>
            Japanese words for the most part are polysyllabic, consisting of
            multiple syllables. English, in contrast, has loads of one syllable
            words ("spring," "rain" and "duck" for instance). For this reason,
            most haiku poets writing in English don't follow the 5-7-5 syllable
            rule. Seventeen syllables of English could potentially add up to
            seventeen separate words, making the "haiku" too long, lessening its
            intensity.
          </p>

          <p>
            <b>
              Why is haiku taught in elementary school as a 17-syllable poem?
            </b>{' '}
            In many school curricula haiku is used to give students practice in
            recognizing syllables and manipulating language. Teachers often
            ignore the most important formal requirement of haiku: two
            image/statements separated by a pause. They treat haiku as if it
            were a poetic form: any combination of words in a 5-7-5 combination.
            In fact, haiku is a genre that requires much more than mere outer
            form.
          </p>

          <p align="left">
            <b>Does a haiku have to be about Nature?</b> Only in the broadest
            sense, since human nature is included in Nature. In Japan, most
            haiku have a season word (<i>kigo</i>) that links the individual
            poem with the vast, archetypal round of the Year of Life.
          </p>

          <p>
            <b>Is haiku a Buddhist genre?</b> Because the originators of haiku
            were Buddhists, many Buddhist themes linger in the tradition,
            including respect for life, openness to the here and now, and a deep
            appreciation of how precious and fleeting life is.
          </p>

          <p>
            <b>How should it be read?</b> Issa, a master of the form, invites
            his readers to partake not of abstract ideas but of
            experience—palpable, wondrous encounters with life: a swallow flying
            out the nose of a great bronze Buddha, cows moo-mooing in thick
            autumn mist, a butterfly resting on a dog curled to sleep. One does
            not read such poetry in a greedy rush to understand a theme, a
            point, or a concept. Rather, we do best by Issa if we open ourselves
            to each haiku with the same non-grasping attention we might pay to a
            bird warbling in a tree. After all, the poet insists, birdsong{' '}
            <i>is</i> haiku:
          </p>

          <blockquote>
            like warbling pure haiku
            <br />
            mountain
            <br />
            cuckoo
          </blockquote>
          {close}
        </article>

        <article
          id="why"
          className={`${this.props.article === 'why' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Why did you build it?</h2>
          <p>
            I'm having some health issues that require me to spend a lot of time
            locked in a room. In order to cheer me up, one of the most beautiful
            persons I've ever met, the one and only cryptobaby{' '}
            <a href="">Seba (aka Paco)</a> started sending me a Haiku per day.
          </p>
          <p>
            In order to not to get bored and to do one of my favorite
            activities, programming, I decided to create this App.{' '}
            <b>I hope you like it as I did when coding it.</b>
          </p>
          {close}
        </article>

        <article
          id="faq"
          className={`${this.props.article === 'faq' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">FAQ</h2>
          <p>
            <b>Is it free?</b> Yes, 100% free. This is a present from me to you.
          </p>
          <p>
            <b>Are you tracking any information?</b> No, not at all. Neither the
            bot nor this app has any kind of tracker. I don't care about that, I
            just want to share this beautiful poems to anyone willing to read
            them.
          </p>
          <p>
            <b>Who created Haiku By The Sea logo?</b> My loved and beautiful
            wife did. She is an amazing Graphic Designer, you can find her work
            in{' '}
            <a href="https://www.behance.net/blerner">on her Behance profile</a>
            .
          </p>
          <p>
            <b>Do you accept any donations?</b> Nope, I'm using a free hosting
            at the moment. That being said, if I ever need to pay for it I'll
            use my own money.
          </p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
