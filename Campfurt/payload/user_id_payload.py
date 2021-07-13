import marshmallow as m


class getcamp(m.Schema):
    id = m.fields.Int(required=True)

    class Meta:
        unknown = m.EXCLUDE
