import React from 'react'
import PropTypes from 'prop-types'
import Quote from './Quote'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Haiku By The Sea</h1>
                <p>
                    Receive a daily Haiku poem straight in your Telegram.
                </p>
                <Quote />
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('what-does-haiku-mean')}}>What is a Haiku Poem?</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('why')}}>Why did you build it?</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('faq')}}>FAQ</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
