import React, { Component } from 'react'

export default class LifeCycleChild extends Component {
    constructor() {
        super()
        this.state = {
            name: "Udin"
        }
        console.log("constructor child")
    }

    componentDidMount() {
        console.log("component DidMount child")
    }

  render() {
    console.log("render child")
    return (
      <div>
        <h1>Ini adalah Life Cycle didMount</h1>
      </div>
    )
  }
}

// Hasilnya adalah string di console parent(lifeCyclle didMount) akan di keluarkan terlebih dahulu. Maksudnya tulisan constructor, render akan ada terlebih dahulu baru constructor child, render child, dan lifeCycle Child baru life cycle parent