import React, { Component } from 'react'

export default class Test extends Component {

   state = {
    title: '',
    body: ''
   };

    componentWillUnmount(){
        console.log('will mount')
    }

    componentDidMount(){
        console.log('did mount')

        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    title: data.title,
                    body: data.body
                })
                console.log(data)
            })
    }

    UNSAFE_componentWillUpdate() {
        console.log(' will update')
    }

    componentDidUpdate() {
        console.log('did update')
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextState){
        console.log('will receive props')
    }

    static getDerivedStateFromProps(nextProps, prevState){
        return null;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate')
    }


  render() {

    const {title, body} = this.state;
    return (
        <div>
            <h1>Test</h1>

            <h2>{title} </h2>
            <p>{body}</p>


        </div>



    )
  }
}
