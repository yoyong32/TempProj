import styled from 'styled-components';
import React from "react";
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
`;

export default class Card extends React.Component<{ card, index }>{
  render() {
    return (
      <Draggable draggableId={this.props.card.id} index={this.props.index}>
        {provided => (
          <Container
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {this.props.card.content}
          </Container>
        )}
      </Draggable>
    );
  }
}
