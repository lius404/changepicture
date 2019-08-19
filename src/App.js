
import React, { Component } from "react"
class App extends Component {
    state = {
        pictures: [
            {
                id: '1',
                name: 'foo',
                url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
            },
            {
                id: '2',
                name: 'foo',
                url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
            },
            {
                id: '3',
                name: 'foo',
                url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
            },
        ],
        datalist: [false, false, false],
        allchecked: false,
        newlist: []
    }
    sum=0
    render() {
        var sum=0
        return (
            <div>
                <input type="checkbox"
                    checked={this.state.datalist.every(item => item) ? 'checked' : null}
                    ref="allChecked"
                    onChange={(event) => { this.allCheckedChange(event) }}
                />全选  已选中
                {
                    this.sum
                }

                {
                    this.state.pictures.map((item, index) => <div key={item.id}>
                        {
                            <div>
                                <input type="checkbox" name="box" checked={this.state.datalist[index] ? 'checked' : null}
                                    onChange={() => this.ownchecked(index)}
                                />
                                <img src={item.url} />
                            </div>
                        }
                    </div>)
                }
            </div>
        )
    }

   

    allCheckedChange(evt) {
        let newdatalist = this.state.datalist;
        console.log(evt.target.checked);
        newdatalist.fill(this.refs.allChecked.checked)
        this.setState({
            datalist: newdatalist
        })
        this.checkedlength()
    }
    ownchecked(index) {
        var mynew = this.state.datalist
        mynew[index] = !this.state.datalist[index]
        this.setState({
            datalist: mynew
        })
        this.checkedlength()
    }

    checkedlength() {
        this.sum=0
        this.state.datalist.forEach((item)=>{
            if(item){
                this.sum++
            }
        })
        return this.sum
    }

}



export default App;
