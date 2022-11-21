import styled from 'styled-components';
import { device } from '../../components/MediaQuery'

export const Container = styled.div`
    width: 100%;
    position: relative;



    > label {
        position: absolute;
        left: 0;
        padding: 15px;
        font-size: 16px;
        color: white;
        transition: 300ms ease-in-out;
        font-weight: 700;

        
    }

    > input, textarea {
        width: 100%;
        padding: 14px;
        font-size: 16px;
        margin-bottom: 16px;
        border-radius: 6px;
        outline: none;
        color: white;
        color: white;

        caret-color: white;

        background: rgba( 112, 18, 112, 0.7 );
        box-shadow: 0 8px 32px 0 rgba( 0, 0, 0, 0.37 );
        backdrop-filter: blur( 6px );
        -webkit-backdrop-filter: blur( 6px );
        border-radius: 10px;
        border: 2px solid transparent;
        transition: 300ms ease-in-out;

       &:focus ~ label,
       &:valid ~ label {
           transform: translateX(20px) translateY(-7px);
           padding: 2px 10px;
           font-size: 14px;
           background: #800080;

           color: white;
           border-radius: 2px;
           font-weight: 700;
       }

        &:focus,
        &:valid {
            box-shadow: 0 0 0 0;
            outline: 0;
            border: 2px solid #800080;
        }


    }
    > textarea {
        height: 150px;
    }
`;