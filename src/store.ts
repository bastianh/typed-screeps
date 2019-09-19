/**
 * Store
 * An object that can contain resources in its cargo.
 * There are two types of stores in the game: general purpose stores and limited stores.
 * General purpose stores can contain any resource within its capacity (e.g. creeps, containers, storages, terminals).
 * Limited stores can contain only a few types of resources needed for that particular object (e.g. spawns, extensions, labs, nukers).
 * The Store prototype is the same for both types of stores, but they have different behavior depending on the resource argument in its methods.
 */
interface Store extends StoreDefinition {
    /**
     * Returns capacity of this store for the specified resource.
     * @param resourceType One of the RESOURCE_* constants.
     */
    getCapacity(resourceType: ResourceConstant | undefined): number | null;
    /**
     * Returns the total capacity of the store.
     */
    getCapacity(): number;
    /**
     * A shorthand for getCapacity(resource) - getUsedCapacity(resource).
     * @param resourceType One of the RESOURCE_* constants.
     */
    getFreeCapacity(resourceType: ResourceConstant | undefined): number | null;
    /**
     * A shorthand for getCapacity() - getUsedCapacity().
     */
    getFreeCapacity(): number;
    /**
     * Returns the capacity used by the specified resource.
     * @param resourceType One of the RESOURCE_* constants.
     */
    getUsedCapacity(resourceType: ResourceConstant | undefined): number | null;
    /**
     * Returns the total used capacity for general purpose store.
     */
    getUsedCapacity(): number;
}
