import React from 'react';
import './styles/Taller.css'

class Tweet extends React.Component {
  render(){
    return(
      <div>
        <a class="twitter-timeline" href="https://twitter.com/metrodemedellin?ref_src=twsrc%5Etfw">Tweets by metrodemedellin</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>
    )
  }
}

export default Tweet;