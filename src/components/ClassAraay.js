import React, { Component } from 'react'

class ClassAraay extends Component {
    render() {
        const colors = ['red', 'blue', 'green']

        const [firstColor, secoundColor, thirdColor] = colors
        return (
            <>
                <div>
                    <div>This is class based array Destructing</div>
                </div>

                <h1>my firstColor is : {firstColor}</h1>

                <h1>My secoundColor is : {secoundColor}</h1>

                <h1>My thirdColor is : {thirdColor}</h1>
            </>
        )
    }
}

export default ClassAraay
