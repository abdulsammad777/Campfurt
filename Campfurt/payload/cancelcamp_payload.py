import marshmallow as m


class Cancelcamp(m.Schema):
    id = m.fields.Int(required=True)

    class Meta:
        unknown = m.EXCLUDE
