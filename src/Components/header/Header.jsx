
<select
  className="rounded bg-black/70 text-orange-500 text-sm px-2 py-1"
  onChange={(e) => setSelectedCategory(e.target.value)}
>
  <option value="Local">Local Matches</option>
  <option value="IPL">IPL</option>
  <option value="BBL">BBL</option>
  <option value="ODI">ODI</option>
  <option value="T20">T20</option>
</select>
