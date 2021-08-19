import { Helmet } from "react-helmet";
import PropTypes from "proptypes";

const PageTitle = ({ pageTitle }) => (
  <Helmet>
    <title>{pageTitle} | Nomad Coffee </title>
  </Helmet>
);

PageTitle.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default PageTitle;
