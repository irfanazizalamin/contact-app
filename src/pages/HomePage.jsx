import React, { useContext, useEffect, useState } from "react";
import ContactList from "../components/ContactList";
import SearchBar from "../components/SearchBar";
import { getContacts, deleteContact } from "../utils/api";
import { useSearchParams } from "react-router-dom";
// import PropTypes from "prop-types";
import LocaleContext, { LocaleConsumer } from "../contexts/LocaleContext";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [contacts, setContacts] = useState([]);
  const [keyword, setKeyword] = useState(
    () => searchParams.get("keyword") || ""
  );
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    async function fetchData() {
      const { data } = await getContacts();
      setContacts(data);
    }

    fetchData();
  }, []);

  async function onDeleteHandler(id) {
    await deleteContact(id);

    // update the contact state from data.js
    const { data } = await getContacts();
    setContacts(data);
  }

  function onKeywordChangeHandler(newKeyword) {
    setKeyword(newKeyword);
    setSearchParams({ keyword: newKeyword });
  }

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section>
      <h2>{locale === "id" ? "Daftar Kontak" : "Contacts List"}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <ContactList contacts={filteredContacts} onDelete={onDeleteHandler} />
    </section>
  );
}

// function HomePageWrapper() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const keyword = searchParams.get("keyword");

//   function changeSearchParams(keyword) {
//     setSearchParams({ keyword });
//   }

//   return (
//     <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
//   );
// }

// class HomePage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       keyword: props.defaultKeyword || "",
//       contacts: [],
//     };

//     this.onDeleteHandler = this.onDeleteHandler.bind(this);
//     this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
//   }

//   async onDeleteHandler(id) {
//     await deleteContact(id);

//     // update the contact state from data.js
//     const { data } = await getContacts();
//     this.setState(() => {
//       return {
//         contacts: data,
//       };
//     });
//   }

//   onKeywordChangeHandler(newKeyword) {
//     this.setState(() => {
//       return {
//         keyword: newKeyword,
//       };
//     });

//     this.props.keywordChange(newKeyword);
//   }

//   async componentDidMount() {
//     const { data } = await getContacts();

//     this.setState(() => {
//       return {
//         contacts: data,
//       };
//     });
//   }

//   render() {
//     const contacts = this.state.contacts.filter((contact) => {
//       return contact.name
//         .toLowerCase()
//         .includes(this.state.keyword.toLowerCase());
//     });

//     return (
//       <LocaleConsumer>
//         {({ locale }) => {
//           return (
//             <section>
//               <h2>{locale === "id" ? "Daftar Kontak" : "Contacts List"}</h2>
//               <SearchBar
//                 keyword={this.state.keyword}
//                 keywordChange={this.onKeywordChangeHandler}
//               />
//               <ContactList
//                 contacts={contacts}
//                 onDelete={this.onDeleteHandler}
//               />
//             </section>
//           );
//         }}
//       </LocaleConsumer>
//     );
//   }
// }

// HomePage.propTypes = {
//   defaultKeyword: PropTypes.string,
//   keywordChange: PropTypes.func.isRequired,
// };

export default HomePage;
