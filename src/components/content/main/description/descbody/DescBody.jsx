import React from "react";
import s from './DescBody.module.css';

class DescBody extends React.Component{

    desc = this.props.desc;
    editable = this.props.editable;

    refDesc = React.createRef();

    onChangeDesc = () => {
        let text = this.refDesc.current.value;
        this.props.updateDesc(text);
    };


    render = () => {
        this.desc = this.props.desc;
        this.editable = this.props.editable;
        if (this.desc === '' || this.editable) {
            return (
                <div>
                    <div>
                        <p1>Описание:</p1>
                    </div>
                    <textarea className={s.c_textaria}
                              value={this.desc}
                              ref={this.refDesc}
                              onChange={this.onChangeDesc}
                    />
                </div>
            )
        } else {
            return (
                <div>
                    <p>{this.desc}</p>
                </div>
            )
        }
    }

}

export default DescBody;