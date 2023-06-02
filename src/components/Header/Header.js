import classNames from "classnames/bind";
import styles from './Header.module.scss';

const cxBind = classNames.bind(styles);

function Header() {
    return (
        <>
            <div className="btn-group container container-md container-sm container-xl container-xxl p-0">
                <button type="button" className="btn btn-danger">Left</button>
                <button type="button" className="btn btn-warning">Middle</button>
                <button type="button" className="btn btn-success">Right</button>
            </div>
        </>
)
}
export default Header;