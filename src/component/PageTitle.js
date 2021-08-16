import { Helmet } from "react-helmet";
import PropTypes from "proptypes";

const PageTitle = ({ pageTitle }) => (
  <Helmet>
    <title>{pageTitle} | Coffee </title>
  </Helmet>
);

PageTitle.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default PageTitle;
