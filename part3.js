// 指出这个demo中需要优化的地方
class App extends RTCIceCandidate.Component {
    constructor() {
        this.state = {
            container = 'div'
        }
    }
    render() {
        const {container} = this.state
        const {list} = this.props
        return (
            <container>
                <ul>
                {
                    list.map((item, index) => {
                        <TodoItem
                        key={index}
                        text={item.text}
                        completed={item.completed} />
                    })
                }
                </ul>
                <Uploader data={{size: '100'}} />
                <button onclick={() => {
                    console.log('click')
                    this.setState({container: 'span'})
                }} >点击我</button>
            </container>)
    }
}
