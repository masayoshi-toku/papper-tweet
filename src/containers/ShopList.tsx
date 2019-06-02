import ShopList from '../components/ShopList'
import { Shop } from '../services/gurunavi/models'
import { DefaultState } from '../reducers/gurunavi'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { show } from '../actions/shop'

interface StateProps {
  shops: Shop[]
}

interface dispatchProps {
  show: (shop: Shop) => void
}

const mapStateToProps = (state: DefaultState): StateProps => ({
  shops: state.gurunavi.shops
})

const mapDispatchToProps = (dispatch: Dispatch): dispatchProps => ({
  show: (shop: Shop) => dispatch(show(shop))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopList)
