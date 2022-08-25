import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Card from '../Cards/card';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;

const Title = styled.h3`
  padding: 8px;
`;

const CardList = styled.div`
  padding:8px;
`;

export default class Column extends React.Component<{ column, cards}>{
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {provided => (
            <CardList
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {this.props.cards.map((card, index) =>(
                <Card key={card.id} card={card} index={index} />))}
              {provided.placeholder}
            </CardList>
          )}
        </Droppable>
      </Container>
    );
  }
}
