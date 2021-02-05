import React from 'react';
import Headline from './headline';
import './headlines.css'

class Headlines extends React.Component {
    state = {
        country: null,
        category: null,
        isLoading: true
    }
    ctUS() {
        this.setState({ country: 'us' })
    }
    ctGB() {
        this.setState({ country: 'gb' })
    }
    ctKR() {
        this.setState({ country: 'kr' })
    }
    ctCN() {
        this.setState({ country: 'cn' })
    }
    ctJP() {
        this.setState({ country: 'jp' })
    }
    cgBusiness() {
        this.setState({ category: 'business' })
    }
    cgEntertainment() {
        this.setState({ category: 'entertainment' })
    }
    cgGeneral() {
        this.setState({ category: 'general' })
    }
    cgSports() {
        this.setState({ category: 'sports' })
    }
    cgTechnology() {
        this.setState({ category: 'technology' })
    }
    eventChanger() {
        if (this.state.country === null || this.state.category === null) {
            alert('choose your country and category')
        } else {
            this.setState({ isLoading: false })
        }
    }
    render() {
        const { isLoading } = this.state;
        return (
            <div className="container">
                {isLoading ? (
                    <div className="selector">
                        <div className="selectUrl">
                            <div className="selectUrl-text">choose your country and category</div>
                            <div className="country">
                                <div className="countries">
                                    <button className='kr' onClick={this.ctKR.bind(this)}>한국</button>
                                    <button className='us' onClick={this.ctUS.bind(this)}>ENGLISH(US)</button>
                                    <button className='gb' onClick={this.ctUS.bind(this)}>ENGLISH(GB)</button>
                                    <button className='jp' onClick={this.ctJP.bind(this)}>日本</button>
                                    <button className='cn' onClick={this.ctCN.bind(this)}>中國</button>
                                </div>
                            </div>
                            <div className="category">
                                <div className="categories">
                                    <button className="general" onClick={this.cgGeneral.bind(this)}>general</button>
                                    <button className="business" onClick={this.cgBusiness.bind(this)}>business</button>
                                    <button className="entertainment" onClick={this.cgEntertainment.bind(this)}>entertainment</button>
                                    <button className="sports" onClick={this.cgSports.bind(this)}>sports</button>
                                    <button className="technology" onClick={this.cgTechnology.bind(this)}>technology</button>
                                </div>
                            </div>
                        </div>
                        <button className="eventchanger" onClick={this.eventChanger.bind(this)}>Here's yours NEWS!</button>
                    </div>
                ) : (
                        <Headline
                            country={this.state.country}
                            category={this.state.category}
                        />
                    )}
            </div>
        )
    }
}

export default Headlines;