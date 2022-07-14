import api, { endpoints } from "."

export async function getAddress(zip: string | undefined) {
    const { get } = await api
    return get(endpoints.address(zip))
}