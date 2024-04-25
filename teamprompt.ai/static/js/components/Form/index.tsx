import WrappedInput from './Input';
import styled, { keyframes } from 'styled-components';
import { paragraph, small } from 'components/Text';
// import { motion } from 'framer-motion';

const skeleton = keyframes`
    0% {
        background-position: -250px 0;
    }
    100% {
        background-position: calc(200px + 100%) 0;
    }
`;

const Skeleton = styled.div<{ width?: string; height?: string }>`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  background-color: #eee;
  background-image: linear-gradient(
    90deg,
    #eee,
    ${props => props.theme.colors.inputColor},
    ${props => props.theme.colors.inputColor},
    #eee
  );
  background-size: 200px 100%;
  background-repeat: no-repeat;
  animation: ${skeleton} 1.3s ease-in-out infinite;
`;

const Input = styled.input`
  border-radius: 8px;
  padding: 12px 16px;
  min-height: 48px;
  width: 100%;
  flex: 1;
  background-color: ${props => props.theme.colors.inputColor};

  &::placeholder {
    color: ${props => props.theme.colors.placeholderColor};
  }
`;

const SkeletonInput = styled(Skeleton)`
  border-radius: 8px;
  padding: 12px 16px;
  width: 100%;
  min-height: 48px;
  flex: 1;
`;

// const onTextareaChange: React.FormEventHandler<HTMLTextAreaElement> = (event) => {
//     const textarea = event.currentTarget;
//     // Reset the height to get the correct scrollHeight
//     textarea.style.height = '0px';
//     const scrollHeight = textarea.scrollHeight;
//     // Update height
//     textarea.style.height = `${scrollHeight}px`;
// };

const Textarea = styled.textarea`
  border-radius: 8px;
  min-height: ${props => (props.rows || 1) * 24 + 24}px;
  padding: 12px 16px;
  width: 100%;
  ${paragraph}
  resize: none;
  border: none;
  background: ${props => props.theme.colors.inputColor};

  &::placeholder {
    color: ${props => props.theme.colors.placeholderColor};
  }
`;

const SkeletonTextarea = styled(Skeleton)<{ rows: number }>`
  min-height: ${props => (props.rows || 1) * 24 + 24}px;
  border-radius: 8px;
  padding: 12px 16px;
  width: 100%;
`;

const Label = styled.label`
  color: ${props => props.theme.colors.placeholderColor};
  margin-bottom: 8px;
  ${paragraph}

  &::first-letter {
    text-transform: uppercase;
  }
`;

const Error = styled.div`
  ${small}
  width: 100%;
  color: #f63d3d;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  ${Label} {
    margin-bottom: 8px;
  }

  ${Input}, ${SkeletonInput} {
    margin-bottom: 24px;
  }

  ${Textarea}, ${SkeletonTextarea} {
    margin-bottom: 24px;
  }

  ${Error} {
    margin-bottom: 32px;
  }
`;

export { Form, SkeletonInput, Input, SkeletonTextarea, Textarea, Label, Error, WrappedInput };
