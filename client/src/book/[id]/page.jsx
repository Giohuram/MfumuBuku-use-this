import { books } from "../../Content/mockData";
import { motion } from 'framer-motion'
import { useParams } from "react-router-dom";
import { useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Editor, useDomValue } from "reactjs-editor"
import { BookContext } from '../../SharedComponents/BookContext'; // Importez votre contexte contenant les données des livres
import styles from './book.module.css'


export default function BookPage() {
    const { id } = useParams();
    const { books } = useContext(BookContext); // Récupérez les données des livres à partir du contexte
    const { dom, setDom } = useDomValue();
  
    // Recherche du livre par ID
    const selectedBook = books.find((book) => book.id === id);
  
    const notify = () => toast('Your changes has been saved!!');
  
    const handleSave = () => {
      // Logique de sauvegarde
      notify();
    };
  
    // Effet de montage pour charger le contenu sauvegardé précédemment
    useEffect(() => {
      const savedDom = localStorage.getItem(`dom${selectedBook.id}`);
      if (savedDom) {
        setDom(JSON.parse(savedDom));
      }
    }, [selectedBook.id, setDom]);
  
    if (!selectedBook) return <p>Book not found</p>;
  
    return (
      <motion.div
        transition={{ type: 'spring', damping: 40, mass: 0.75 }}
        initial={{ opacity: 0, x: 1000 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <motion.section
          transition={{ type: 'spring', damping: 44, mass: 0.75 }}
          initial={{ opacity: 0, y: -1000 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.appBar}
        >
          {/* Contenu de la barre d'application */}
        </motion.section>
  
        {/* Affichage du contenu du livre */}
        <Editor
          htmlContent={`
            <main className="bookContainer">
              <aside>
                <h1 className="center">${selectedBook.title}</h1>
                <span className="center small"> By ${selectedBook.author} </span>
                ${selectedBook.content}
              </aside>
            </main>
          `}
        />
        <ToastContainer />
      </motion.div>
    );
  }