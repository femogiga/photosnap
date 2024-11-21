import React from 'react';
import ImageCard from '../components/imageCard';
import Card from '../components/Card';

const Story = () => {
  return (
    <main>
      <section>
        <ImageCard />
      </section>
      <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:md:grid-cols-4 	'>
        <Card
          src={
            'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=600'
          }
        />
        <Card
          src={
            'https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=600'
          }
        />
        <Card
          src={
            'https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600'
          }
        />
        <Card
          src={
            'https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=600'
          }
        />
        <Card
          src={
            'https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=600'
          }
        />
        <Card
          src={
            'https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=600'
          }
        />
        <Card
          src={
            'https://images.pexels.com/photos/7915002/pexels-photo-7915002.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
          }
        />
        <Card
          src={
            'https://images.pexels.com/photos/7792053/pexels-photo-7792053.jpeg?auto=compress&cs=tinysrgb&w=600'
          }
        />
      </section>
    </main>
  );
};

export default Story;
