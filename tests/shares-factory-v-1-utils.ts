import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  Buy,
  ClaimYield,
  MigrateYield,
  Mint,
  OwnershipTransferred,
  Sell,
  SetCurve,
  SetFee
} from "../generated/SharesFactoryV1/SharesFactoryV1"

export function createBuyEvent(
  id: BigInt,
  buyer: Address,
  quantity: BigInt,
  totalPrice: BigInt
): Buy {
  let buyEvent = changetype<Buy>(newMockEvent())

  buyEvent.parameters = new Array()

  buyEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  buyEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  buyEvent.parameters.push(
    new ethereum.EventParam(
      "quantity",
      ethereum.Value.fromUnsignedBigInt(quantity)
    )
  )
  buyEvent.parameters.push(
    new ethereum.EventParam(
      "totalPrice",
      ethereum.Value.fromUnsignedBigInt(totalPrice)
    )
  )

  return buyEvent
}

export function createClaimYieldEvent(amount: BigInt, to: Address): ClaimYield {
  let claimYieldEvent = changetype<ClaimYield>(newMockEvent())

  claimYieldEvent.parameters = new Array()

  claimYieldEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  claimYieldEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return claimYieldEvent
}

export function createMigrateYieldEvent(
  yieldAggregator: Address
): MigrateYield {
  let migrateYieldEvent = changetype<MigrateYield>(newMockEvent())

  migrateYieldEvent.parameters = new Array()

  migrateYieldEvent.parameters.push(
    new ethereum.EventParam(
      "yieldAggregator",
      ethereum.Value.fromAddress(yieldAggregator)
    )
  )

  return migrateYieldEvent
}

export function createMintEvent(
  id: BigInt,
  creator: Address,
  curveType: i32
): Mint {
  let mintEvent = changetype<Mint>(newMockEvent())

  mintEvent.parameters = new Array()

  mintEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  mintEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  mintEvent.parameters.push(
    new ethereum.EventParam(
      "curveType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(curveType))
    )
  )

  return mintEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createSellEvent(
  id: BigInt,
  seller: Address,
  quantity: BigInt,
  totalPrice: BigInt
): Sell {
  let sellEvent = changetype<Sell>(newMockEvent())

  sellEvent.parameters = new Array()

  sellEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  sellEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  sellEvent.parameters.push(
    new ethereum.EventParam(
      "quantity",
      ethereum.Value.fromUnsignedBigInt(quantity)
    )
  )
  sellEvent.parameters.push(
    new ethereum.EventParam(
      "totalPrice",
      ethereum.Value.fromUnsignedBigInt(totalPrice)
    )
  )

  return sellEvent
}

export function createSetCurveEvent(curveType: i32): SetCurve {
  let setCurveEvent = changetype<SetCurve>(newMockEvent())

  setCurveEvent.parameters = new Array()

  setCurveEvent.parameters.push(
    new ethereum.EventParam(
      "curveType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(curveType))
    )
  )

  return setCurveEvent
}

export function createSetFeeEvent(feePercent: BigInt, feeType: string): SetFee {
  let setFeeEvent = changetype<SetFee>(newMockEvent())

  setFeeEvent.parameters = new Array()

  setFeeEvent.parameters.push(
    new ethereum.EventParam(
      "feePercent",
      ethereum.Value.fromUnsignedBigInt(feePercent)
    )
  )
  setFeeEvent.parameters.push(
    new ethereum.EventParam("feeType", ethereum.Value.fromString(feeType))
  )

  return setFeeEvent
}
