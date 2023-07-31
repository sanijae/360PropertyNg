import React from 'react'
import {DColumn,Image,FlexContainer,Heading,Buttons,Texts, DRows} from './Style'
import { MdPerson } from 'react-icons/md'

export default function BlogDetail() {
  return (
    <div>
    <DRows>
        <DColumn>
            <div className='mt-2'>
            <Image src={require('../../Images/3.jpg')} alt='Images' />
            <FlexContainer>
                <div>
                <MdPerson/>saj
                </div>
                <div>1 may 2020</div>
            </FlexContainer>
            <Heading>Mina Picture</Heading>
            <Texts>
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla porttitor accumsan tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla quis lorem ut libero malesuada feugiat.
                Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
            </Texts>
            </div>
        </DColumn>
      <DColumn width='30%'>
            <div className='mt-2'>
            <Image src={require('../../Images/3.jpg')} alt='Images' />
            <FlexContainer>
                <div>
                <MdPerson/>saj
                </div>
                <div>1 may 2020</div>
            </FlexContainer>
            <Heading>Mina Picture</Heading>
            <Texts>
              Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat.
            </Texts>
            <Buttons>Read More</Buttons>
            </div>
            <div className='mt-2'>
            <Image src={require('../../Images/3.jpg')} alt='Images' />
            <FlexContainer>
                <div>
                <MdPerson/>saj
                </div>
                <div>1 may 2020</div>
            </FlexContainer>
            <Heading>Mina Picture</Heading>
            <Texts>
              Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat.
            </Texts>
            <Buttons>Read More</Buttons>
            </div>
        </DColumn>
    </DRows>
    </div>
  )
}
