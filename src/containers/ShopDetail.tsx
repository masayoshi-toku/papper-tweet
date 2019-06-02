import ShopDetail from '../components/ShopDetail'
import { connect } from 'react-redux'
import { Shop } from '../services/gurunavi/models'
import { DefaultState } from '../reducers/gurunavi'

interface StateProps {
  shop: Shop
}

const mapStateToProps = (state: DefaultState): StateProps => ({
  shop: state.shop.shop
})

export default connect(mapStateToProps)(ShopDetail)
