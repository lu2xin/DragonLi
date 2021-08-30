import isWindows from 'is-windows'
import commandExists from 'command-exists'
import execa from 'execa'
import is from '@sindresorhus/is'
import ow from 'ow'

export default async (page) => {
	if (!isWindows) throw new Error("Only Windows is supported!")
	if (!(await commandExists("chcp"))) throw new Error("chcp doesn't exist!")
	ow(page, ow.any(ow.number, ow.undefined))

	if (is.number(page)) {
		try {
			await execa("chcp", [page])
			return
		} catch (err) {
			if (err.stderr === "Invalid code page") throw new TypeError("`page` is not a valid code page.")
			throw err
		}
	} else {
		const { stdout } = await execa("chcp")
		return Number(stdout.match(/(\d+)$/)[1])
	}
}

export const sync = (page) => {
	if (!isWindows) throw new Error("Only Windows is supported!")
	if (!commandExists.sync("chcp")) throw new Error("chcp doesn't exist!")
	ow(page, ow.any(ow.number, ow.undefined))

	if (is.number(page)) {
		try {
			execa.sync("chcp", [page])
			return
		} catch (err) {
			if (err.stderr === "Invalid code page") throw new TypeError("`page` is not a valid code page.")
			throw err
		}
	} else {
		const { stdout } = execa.sync("chcp")
		return Number(stdout.match(/(\d+)$/)[1])
	}
}