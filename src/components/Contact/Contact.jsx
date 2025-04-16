import css from './Contact.module.css';
import { IoMdPerson } from 'react-icons/io';
import { MdPhone } from 'react-icons/md';

const Contact = ({ contact, onDelete }) => {
    return (
        <li className={css.card}>
            <div className={css.infoBlock}>
                <div className={css.row}>
                    <IoMdPerson className={css.icon} />
                    <span>{contact.name}</span>
                </div>
                <div className={css.row}>
                    <MdPhone className={css.icon} />
                    <span>{contact.number}</span>
                </div>
            </div>
            <button
                type="button"
                className={css.deleteBtn}
                onClick={() => onDelete(contact.id)}
            >
                Delete
            </button>
        </li>
    );
};

export default Contact;
