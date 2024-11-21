import React from 'react';
import ImageCard from '../components/imageCard';
import Card from '../components/Card';
import StoryCard from '../components/StoryCard';

const Story = () => {
  return (
    <main>
      <section >
        <StoryCard
          src={
            'https://images.pexels.com/photos/14144555/pexels-photo-14144555.jpeg?auto=compress&cs=tinysrgb&w=1200'
          }
        />
      </section>
      <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  card-section'>
        <Card
          src={
            'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1200'
          }
        />
        <Card
          src={
            'https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1200'
          }
        />
        <Card
          src={
            'https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=1200'
          }
        />
        <Card
          src={
            'https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=1200'
          }
        />
        <Card
          src={
            'https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=1200'
          }
        />
        <Card
          src={
            'https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=1200'
          }
        />
        <Card
          src={
            'https://images.pexels.com/photos/12689078/pexels-photo-12689078.jpeg?auto=compress&cs=tinysrgb&w=1200'
          }
        />
        <Card
          src={
            'https://images.pexels.com/photos/8421981/pexels-photo-8421981.jpeg?auto=compress&cs=tinysrgb&w=1200'
          }
        />
      </section>
    </main>
  );
};

export default Story;
