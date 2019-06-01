import ShopList from '../components/ShopList'
import { Shop } from '../services/gurunavi/models'
import { GurunaviState } from '../reducer'
import { connect } from 'react-redux';

interface StateProps {
  shops: Shop[]
}

const mapStateToProps = (state: GurunaviState): StateProps => ({
  shops: state.shops
})

export default connect(mapStateToProps)(ShopList)
