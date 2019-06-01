import ShopList from '../components/ShopList'
import { Shop } from '../services/hotpapper/models'
import { HotPapperState } from '../reducer'
import { connect } from 'react-redux';

interface StateProps {
  shops: Shop[]
}

const mapStateToProps = (state: HotPapperState): StateProps => ({
  shops: state.shops
})

export default connect(mapStateToProps)(ShopList)
