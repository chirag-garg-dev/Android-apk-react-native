import React, {useState, useCallback} from 'react';
import {Button, View, Alert} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export const Youtube = () => {
  return (
    <View>
      <Test>Chirag</Test> 
    </View>
  )
}

const YoutubeData = () => {

  const [playing, setPlaying] = useState(false);
  const togglePlaying = () => {
    setPlaying((prev) => !prev);
  }

  return (
    <View>
      <YoutubePlayer
        height={300}     
        play={playing}
        videoId={'t0Q2otsqC4I'}
      />
      <Button title={playing ? 'pause' : 'play'} onPress={togglePlaying} />
    </View>
  )
}
export default YoutubeData;