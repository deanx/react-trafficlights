import React from 'react';

export default class Lights extends React.Component {
  render() {
    return <section className={this.props.className}><div className='light disabled-light first-light'></div>
    <div className='light disabled-light second-light'></div>
    <div className='light disabled-light third-light'></div></section>
  }
}
