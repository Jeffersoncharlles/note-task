import styles from './styles.module.scss'
import { MdSearch } from 'react-icons/all'

interface Props {
    value: string;
    setSearch: (e: string) => void
}

export const Search = ({ setSearch, value }: Props) => {

    return (
        <div className={styles.container}>
            <MdSearch size="1.3rem" />
            <input
                type="text"
                placeholder='Procurar suas notas'
                value={value}
                onChange={e => setSearch(e.target.value)}
            />
        </div>
    );
}