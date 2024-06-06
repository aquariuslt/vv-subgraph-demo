import {
  Buy as BuyEvent,
  ClaimYield as ClaimYieldEvent,
  MigrateYield as MigrateYieldEvent,
  Mint as MintEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Sell as SellEvent,
  SetCurve as SetCurveEvent,
  SetFee as SetFeeEvent
} from "../generated/SharesFactoryV1/SharesFactoryV1"
import {
  Buy,
  ClaimYield,
  MigrateYield,
  Mint,
  OwnershipTransferred,
  Sell,
  SetCurve,
  SetFee
} from "../generated/schema"

export function handleBuy(event: BuyEvent): void {
  let entity = new Buy(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.SharesFactoryV1_id = event.params.id
  entity.buyer = event.params.buyer
  entity.quantity = event.params.quantity
  entity.totalPrice = event.params.totalPrice

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimYield(event: ClaimYieldEvent): void {
  let entity = new ClaimYield(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.amount = event.params.amount
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMigrateYield(event: MigrateYieldEvent): void {
  let entity = new MigrateYield(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.yieldAggregator = event.params.yieldAggregator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMint(event: MintEvent): void {
  let entity = new Mint(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.SharesFactoryV1_id = event.params.id
  entity.creator = event.params.creator
  entity.curveType = event.params.curveType

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSell(event: SellEvent): void {
  let entity = new Sell(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.SharesFactoryV1_id = event.params.id
  entity.seller = event.params.seller
  entity.quantity = event.params.quantity
  entity.totalPrice = event.params.totalPrice

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetCurve(event: SetCurveEvent): void {
  let entity = new SetCurve(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.curveType = event.params.curveType

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetFee(event: SetFeeEvent): void {
  let entity = new SetFee(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.feePercent = event.params.feePercent
  entity.feeType = event.params.feeType

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
