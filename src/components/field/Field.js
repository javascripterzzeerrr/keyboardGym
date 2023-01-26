import './field.scss';

const Field = () => {
    return (
        <div className="field">
            <textarea type="text" disabled className="input_text" defaultValue={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam saepe quisquam beatae eum impedit laudantium dolores laborum fuga voluptatum, asperiores libero temporibus voluptates consequuntur dolor quia iure, nostrum obcaecati numquam"} />
        </div>
    );
}

export default Field;