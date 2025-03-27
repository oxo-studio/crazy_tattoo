import PropTypes from "prop-types";

const Container = ({ children }) => {
    return (
        <div className="max-w-[2500px] mx-auto xl:px-20 md:px-10 sm:px-2 ">
            {children}
        </div>
    );
};

// Aggiungi la validazione delle props
Container.propTypes = {
    children: PropTypes.node.isRequired, // Assicura che children sia un nodo React valido
};

export default Container;
